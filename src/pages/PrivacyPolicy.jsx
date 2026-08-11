import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <section className="section legal-page" style={{ paddingBottom: 100 }}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: October 24, 2024</p>

          <div className="legal-card">
            <h2>1. Introduction</h2>
            <p>
              At HI TECH Solutions, we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you
              visit our website, use our tech support services, or engage with our retail stores
              in Canada. We respect your privacy and are committed to protecting personally
              identifiable information you may provide us.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in
              accordance with this policy. We maintain this privacy policy to inform you of what
              information we collect on our Website, how we use this information, and under what
              circumstances we may disclose the information to third parties.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect several different types of information for various purposes to provide
              and improve our service to you.
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> While using our Service, we may ask you to provide
                us with certain personally identifiable information that can be used to contact or
                identify you (&ldquo;Personal Data&rdquo;). Personally identifiable information may
                include, but is not limited to: Email address, First name and last name, Phone
                number, Address, State, Province, ZIP/Postal code, City.
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information how the Service is
                accessed and used (&ldquo;Usage Data&rdquo;). This Usage Data may include
                information such as your computer&rsquo;s Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages of our Service that you visit,
                the time and date of your visit, the time spent on those pages, unique device
                identifiers and other diagnostic data.
              </li>
              <li>
                <strong>Tracking &amp; Cookies Data:</strong> We use cookies and similar tracking
                technologies to track the activity on our Service and hold certain information.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>HI TECH Solutions uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our tech support services</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support and troubleshoot technical issues</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our website and services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your Personal Data,
              we cannot guarantee its absolute security.
            </p>
            <p>
              We implement a variety of security measures to maintain the safety of your personal
              information when you enter, submit, or access your personal information. All
              supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL)
              technology and then encrypted into our Payment gateway providers database only to be
              accessible by those authorized with special access rights to such systems, and are
              required to keep the information confidential.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              HI TECH Solutions aims to take reasonable steps to allow you to correct, amend, delete,
              or limit the use of your Personal Data.
            </p>
            <p>
              If you wish to be informed what Personal Data we hold about you and if you want it
              to be removed from our systems, please contact us. In certain circumstances, you
              have the following data protection rights:
            </p>
            <ul>
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>
                The right of rectification. You have the right to have your information rectified
                if that information is inaccurate or incomplete.
              </li>
              <li>The right to object. You have the right to object to our processing of your Personal Data.</li>
              <li>
                The right of restriction. You have the right to request that we restrict the
                processing of your personal information.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
