import * as React from 'react'
import Pagelayout from '../../elements/Pagelayout'
import withTitle from '../../context/withTitle'

const PrivacyPolicy = () => {
  return (
    <Pagelayout>
      <h1 className='m-4'>Privacy Policy</h1>
      <h4>Last updated July 21. 2020</h4>
      <h3 className='ml-8 mt-8'>Extend of Policy</h3>
      <p className='my-4 mx-8'>
        This policy explains how we at Framethrower handle your personal
        information, your privacy rights, and how the law and our approach to
        personal data protects you. At Framethrower we’re committed to
        protecting our members, while being transparent about how we handle
        their data and abiding by data protection laws.
      </p>
      <h3 className='ml-8 mt-8'>Changes</h3>
      <p className='my-4 mx-8'>
        We may change this policy at any time by posting the revised policy on
        our website. Please check regularly for updates concerning this.
      </p>
      <h3 className='ml-8 mt-8'>Privacy Officer</h3>
      <p className='my-4 mx-8'>
        Our designed privacy officer is reliable for our compliance with data
        protection laws. Please see below for contact information.{' '}
      </p>
      <h3 className='ml-8 mt-8'>Information We Collect</h3>
      <p className='my-4 mx-8'>
        We may collect various information from you as forenames, last name, job
        title/position, e-mail address, photograph, interaction with our website
        and other information you provide to us. use our Website and areas that
        you have interacted with.
      </p>
      <h3 className='ml-8 mt-8'>Purposes</h3>
      <p className='my-4 mx-8'>
        We collect and use this information for the following:
      </p>
      <ul className='ml-12'>
        <li className='ml-1'>
          To communicate directly with you and verify your identity.
        </li>
        <li className='ml-1'>
          To customize job offers, advertising and other content presented to
          you on the website.
        </li>
        <li className='ml-1'>To operate, upgrade and customize the website</li>
        <li className='ml-1'>To allow you to use our services and forums.</li>
        <li className='ml-1'>
          To provide news or information regarding changes to the website.
        </li>
        <li className='ml-1'>To protect you and ourselves from fraud</li>
        <li className='ml-1'>To ensure payment of services or goods</li>
        <li className='ml-1'>To comply with legal requirements</li>
      </ul>
      <h3 className='ml-8 mt-8'>Data Accuracy</h3>
      <p className='my-4 mx-8'>
        It is important that the data that we hold about you is accurate and up
        to date. In the event that your data changes please notify us so that we
        can update our records.
      </p>
      <h3 className='ml-8 mt-8'>Data storage and transfer</h3>
      <p className='my-4 mx-8'>
        In order to enable us to offer the services mentioned above, through our
        website, the information you provide to us may be transferred to and
        stored in countries other than the country in which you’re residing, as
        we may use remote website server hosts to provide the website and some
        aspects of our service. It may also be processed by staff operating
        elsewhere, working for our website server host. Please contact our
        Privacy Officer (contact information is listed below) for more
        information about collection, use and storage of information by
        off-shore providers.
      </p>
      <h3 className='ml-8 mt-8'>Security and Consent</h3>
      <p className='my-4 mx-8'>
        We take the confidentiality of personal information very seriously, and
        we will not sell or lease your information to third parties, and we will
        obtain consent to collect or use information, unless required by law to
        do so without consent. Other material or information (as notes, comments
        etc.) posted on the website will be considered non-confidential and
        non-propiretary.
      </p>
      <h3 className='ml-8 mt-8'>Collecting Data</h3>
      <p className='my-4 mx-8'>
        We will not collect information indiscriminately and will limit
        collection to what is necessary to offer the services listed above (see:
        Purporses).
      </p>
      <h3 className='ml-8 mt-8'>Using Data</h3>
      <p className='my-4 mx-8'>
        We will only use and disclose information for the purposes stated above
        (see: Purporses) and delete or make anonymous information should a user
        wish to end their affiliation with us.
      </p>
      <h3 className='ml-8 mt-8'>Access</h3>
      <p className='my-4 mx-8'>
        Should you wish to access your personal data, we will provide you with
        those under our care, against a written request and authentication of
        identity.
      </p>
      <h3 className='ml-8 mt-8'>Third Party Links</h3>
      <p className='my-4 mx-8'>
        You might find links to third party websites on our website. If you
        click a link to a third-party website and visit that site, you may be
        allowing that site to collect and share certain data about you. These
        websites should have their own privacy policies, and we do not accept
        any responsibility or liability for their policies.
      </p>
      <h3 className='ml-8 mt-8'>Questions or concerns</h3>
      <p className='my-4 mx-8'>
        If you wish to raise a complaint regarding our use of your personal data
        then please contact us by email at support@framethrower.io.
      </p>
    </Pagelayout>
  )
}

export default withTitle(PrivacyPolicy, 'Privacy Policy')
