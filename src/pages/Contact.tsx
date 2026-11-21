import { useState, useEffect, useCallback, useId } from 'react';
import { Mail, Copy, Check, Send, MapPin, User, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { site, getEmail } from '../data/site';
import { socialLinks } from '../data/social';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  // Form state
  const [fullName, setFullName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  // Status state
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  useEffect(() => {
    setEmail(getEmail());
  }, []);

  const handleCopy = useCallback(() => {
    if (!email) return;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (honeypot) {
      return;
    }

    // Required checks
    if (!fullName.trim() || !senderEmail.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail.trim())) {
      setStatus('error');
      setStatusMessage('Please provide a valid email address.');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      // Fallback to mailto when Web3Forms key is not configured
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(`Name: ${fullName}\nEmail: ${senderEmail}\n\n${message}`)}`;
      window.location.href = mailtoUrl;
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: fullName,
          email: senderEmail,
          subject: subject,
          message: message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMessage('Thank you. Your message has been sent successfully.');
        setFullName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'There was an issue sending your message. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error occurred. Please try again or reach out directly by email.');
    }
  };

  const activeSocials = socialLinks.filter((s) => s.url.trim().length > 0);

  return (
    <PageTransition>
      <SEO
        title="Contact | Amaan Javaid"
        description="For professional enquiries, collaboration or general communication, get in touch with Amaan Javaid."
      />

      {/* Header */}
      <section className="container" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <ScrollReveal>
          <p className="label mb-4" style={{ color: 'var(--color-silver)' }}>
            05 / Communication
          </p>
          <h1 className="hero-heading mb-6">Contact</h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: 'var(--color-muted)', maxWidth: '680px', lineHeight: '1.6' }}
          >
            For professional enquiries, collaboration or general communication, feel free to get in touch.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Contact Grid */}
      <section className="container section" style={{ paddingTop: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Direct Details */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <h2 className="section-heading mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                Direct Details
              </h2>
              <p className="text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
                You can reach out directly via email or by completing the form.
              </p>

              <div className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex items-start gap-3">
                  <User size={18} style={{ color: 'var(--color-silver)', marginTop: '3px' }} />
                  <div>
                    <span className="label block mb-1">Name</span>
                    <p style={{ color: 'var(--color-text)' }}>{site.name}</p>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-start gap-3">
                  <Mail size={18} style={{ color: 'var(--color-silver)', marginTop: '3px' }} />
                  <div>
                    <span className="label block mb-1">Email</span>
                    {email ? (
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={`mailto:${email}`}
                          style={{ color: 'var(--color-text)' }}
                          className="hover:underline"
                        >
                          {email}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopy}
                          aria-label="Copy email address"
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-sm border transition-colors duration-200 cursor-pointer"
                          style={{
                            borderColor: 'var(--color-border)',
                            color: copied ? 'var(--color-accent)' : 'var(--color-muted)',
                            backgroundColor: 'var(--color-bg-secondary)',
                          }}
                        >
                          {copied ? (
                            <>
                              <Check size={12} /> Copied
                            </>
                          ) : (
                            <>
                              <Copy size={12} /> Copy email
                            </>
                          )}
                        </button>
                      </div>
                    ) : (
                      <span style={{ color: 'var(--color-muted)' }}>Loading...</span>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: 'var(--color-silver)', marginTop: '3px' }} />
                  <div>
                    <span className="label block mb-1">Location</span>
                    <p style={{ color: 'var(--color-text)' }}>{site.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <ScrollReveal delay={0.1}>
              <div
                className="p-8 md:p-10 rounded-sm border"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-secondary)',
                }}
              >
                <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text)' }}>
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Honeypot field */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="botcheck">Do not fill this field</label>
                    <input
                      id="botcheck"
                      type="text"
                      name="botcheck"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor={nameId} className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      Full Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="px-4 py-2.5 rounded-sm border text-sm transition-colors duration-200"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor={emailId} className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      Email Address <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="px-4 py-2.5 rounded-sm border text-sm transition-colors duration-200"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor={subjectId} className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      Subject <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id={subjectId}
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="px-4 py-2.5 rounded-sm border text-sm transition-colors duration-200"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                      }}
                      placeholder="Message subject"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor={messageId} className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      Message <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <textarea
                      id={messageId}
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="px-4 py-2.5 rounded-sm border text-sm transition-colors duration-200 resize-y"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                      }}
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Status alert */}
                  {statusMessage && (
                    <div
                      role="alert"
                      className="p-3 text-sm rounded-sm"
                      style={{
                        backgroundColor:
                          status === 'success'
                            ? 'rgba(82, 103, 126, 0.12)'
                            : 'rgba(239, 68, 68, 0.1)',
                        color:
                          status === 'success'
                            ? 'var(--color-text)'
                            : '#ef4444',
                        border: `1px solid ${status === 'success' ? 'var(--color-accent)' : '#ef4444'}`,
                      }}
                    >
                      {statusMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm transition-opacity duration-200 cursor-pointer disabled:opacity-50"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: '#ffffff',
                      }}
                    >
                      <Send size={14} />
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Elsewhere Section */}
      {activeSocials.length > 0 && (
        <section className="container section border-t" style={{ borderColor: 'var(--color-border)' }}>
          <SectionHeading number="02" title="Elsewhere" />

          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {activeSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-sm border transition-colors duration-200"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-secondary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        {social.label}
                      </span>
                    </div>
                    <ArrowUpRight size={14} style={{ color: 'var(--color-silver)' }} />
                  </a>
                );
              })}
            </div>
          </ScrollReveal>
        </section>
      )}
    </PageTransition>
  );
}
