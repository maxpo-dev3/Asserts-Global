'use client'

import React from 'react'

export default function PrivacyPolicyContent() {
  return (
    <div className="bg-white text-[#07173A] px-4 py-10 md:px-12 lg:px-24 space-y-8 text-sm leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-[#7AB945]">Privacy Policy</h1>
      <p className="italic text-gray-500">Last updated: July 31, 2025</p>

      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information
        when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and
        use of information in accordance with this Privacy Policy.
      </p>

      <Section title="Interpretation and Definitions" />
      <SubSection title="Interpretation">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following
        definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </SubSection>

      <SubSection title="Definitions">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
          <li><strong>Affiliate:</strong> Entity under common control (50%+ ownership).</li>
          <li><strong>Company:</strong> Assets Global, 50 2nd floor, MM Road, Bengaluru, Karnataka 560005.</li>
          <li><strong>Cookies:</strong> Small files placed on Your device by websites.</li>
          <li><strong>Country:</strong> Karnataka, India</li>
          <li><strong>Device:</strong> Any device like computer, mobile, or tablet.</li>
          <li><strong>Personal Data:</strong> Information related to an identifiable individual.</li>
          <li><strong>Service:</strong> Refers to the Website.</li>
          <li><strong>Service Provider:</strong> Entity processing data on behalf of the Company.</li>
          <li><strong>Usage Data:</strong> Automatically collected data like IP, browser type, etc.</li>
          <li><strong>Website:</strong> assetsglobal.in</li>
          <li><strong>You:</strong> The individual using the Service.</li>
        </ul>
      </SubSection>

      <Section title="Collecting and Using Your Personal Data" />
      <SubSection title="Types of Data Collected">
        <p><strong>Personal Data:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email address</li>
          <li>First and last name</li>
          <li>Address, State, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <p className="mt-4"><strong>Usage Data:</strong></p>
        <p>
          Usage Data is collected automatically and may include device IP, browser type, version, pages visited, date/time, time
          spent, and diagnostic data. On mobile, this also includes device type, OS, and unique IDs.
        </p>
      </SubSection>

      <SubSection title="Tracking Technologies and Cookies">
        <p>We use Cookies and similar tracking to monitor and analyze usage.</p>
        <ul className="list-disc list-inside">
          <li><strong>Browser Cookies:</strong> Small files stored by your browser.</li>
          <li><strong>Web Beacons:</strong> Tiny graphics to monitor user actions.</li>
        </ul>
        <p className="mt-2">
          Cookies can be "Persistent" (remain offline) or "Session" (deleted when browser closes).
        </p>
        <p className="mt-2">
          We use:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Essential Cookies:</strong> Required for core functionality.</li>
          <li><strong>Notice Cookies:</strong> Track cookie consent.</li>
          <li><strong>Functionality Cookies:</strong> Remember user preferences.</li>
        </ul>
      </SubSection>

      <Section title="Use of Your Personal Data" />
      <ul className="list-disc list-inside space-y-1">
        <li>To provide and maintain the Service</li>
        <li>To manage Your Account</li>
        <li>To fulfill contracts</li>
        <li>To contact You for updates or alerts</li>
        <li>To send offers and news (if not opted out)</li>
        <li>To handle user requests</li>
        <li>To perform business transfers</li>
        <li>For analytics, improvements, and marketing</li>
      </ul>

      <p className="mt-4 font-medium text-[#7AB945]">Sharing:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>With service providers for functionality</li>
        <li>During mergers or acquisitions</li>
        <li>With affiliates and business partners</li>
        <li>In public areas (e.g., comments)</li>
        <li>With your consent</li>
      </ul>

      <Section title="Retention and Deletion of Personal Data" />
      <p>
        We retain Personal Data only as long as necessary to comply with legal obligations and enforce agreements. Usage Data may
        be retained for security and analytical improvements.
      </p>

      <Section title="Transfer of Your Personal Data" />
      <p>
        Your data may be stored and processed in locations outside of your jurisdiction. We take steps to ensure safe transfers.
      </p>

      <Section title="Delete Your Personal Data" />
      <p>
        You can request deletion by contacting us or using features in your account settings. Some data may be retained if legally
        required.
      </p>

      <Section title="Disclosure of Your Personal Data" />
      <ul className="list-disc list-inside space-y-1">
        <li>During business transfers</li>
        <li>To law enforcement when required</li>
        <li>To protect company rights and users</li>
      </ul>

      <Section title="Security of Your Personal Data" />
      <p>
        We use commercially acceptable methods to protect your data but cannot guarantee 100% security.
      </p>

      <Section title="Children's Privacy" />
      <p>
        We do not knowingly collect data from children under 13. If you're a parent/guardian aware of a violation, contact us.
      </p>

      <Section title="Links to Other Websites" />
      <p>
        Our Service may link to third-party sites. We are not responsible for their content or policies.
      </p>

      <Section title="Changes to This Privacy Policy" />
      <p>
        We may update this Privacy Policy periodically. Changes are effective when posted here. You’ll be notified of major
        updates.
      </p>

      <Section title="Contact Us" />
      <p>
        If you have any questions, contact us at:
        <br />
        <a href="mailto:info@assetsglobal.in" className="text-[#7AB945] hover:underline">info@assetsglobal.in</a>
      </p>
    </div>
  )
}

function Section({ title }: { title: string }) {
  return <h2 className="text-2xl font-semibold pt-10 text-[#7AB945]">{title}</h2>
}

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="pt-6">
      <h3 className="text-lg font-medium text-[#07173A]">{title}</h3>
      <div className="mt-2 text-black">{children}</div>
    </div>
  )
}
