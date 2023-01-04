import { useState } from 'react'
import Button from '@/components/Button'
//const doNothing = (e) => {
//  e.stopPropagation()
//}

const EmailForm = () => {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')

  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    setDone(true)
  }

  return (
    <> 
    <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <h2 className="inline text-3xl text-th-fgd-4 font-mono font-extrabold sm:block sm:text-4xl">
                Want product news and updates?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green sm:block sm:text-4xl">
                  Sign up for the monitor.
                </span>
              </h2>

              <form className="mt-8 sm:flex" onSubmit={handleSubmit}>
                <label className="sr-only">Email address</label>
                {done ? (
                  <span>Thank you for signing up! 🎉</span>
                ) : (
                  <>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-screen px-5 py-2 placeholder-gray-400 text-black text-opacity-80 sm:max-w-xs border-gray-300 rounded-xl focus:outline-none"
                      placeholder="Drop us your email..."
                      value={email}
                      onChange={handleChange}
                    />
                    <div className="mt-3 rounded-xl sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <Button>
                        <span className="">Sign me up!</span>
                      </Button>
                    </div>
                  </>
                )}
              </form>
              <div className="w-full mt-4">
                <p className="text-xl font-body text-th-fgd-3 text-opacity-50">
                  We promise to never spam and only send alpha.
                </p>
              </div>
            </div>
          </section>
    </>
  )
}

export default EmailForm;
    
         
         
         
         
        