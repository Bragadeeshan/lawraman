'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up server action or API route for form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success} role="alert">
        <p className={styles.successHeading}>Message sent</p>
        <p className={styles.successText}>
          Thank you for reaching out. We&rsquo;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Full name <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            required
            autoComplete="name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email address <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>
          Phone number{' '}
          <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={styles.input}
          autoComplete="tel"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Subject <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={styles.input}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          rows={6}
          required
        />
      </div>

      <button type="submit" className={styles.submit}>
        Send message
      </button>
    </form>
  )
}
