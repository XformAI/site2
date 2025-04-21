
import Layout from '../components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-xform-blue-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-6 animate-fade-in">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-xform-gray-default mb-6">
                Last Updated: April 10, 2025
              </p>
              <p className="text-xform-gray-default mb-6">
                These Terms of Service ("Terms") govern your access to and use of the XformAI website, products, and services ("Services"). Please read these Terms carefully, and contact us if you have any questions. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">1. Using Our Services</h2>
              <h3 className="text-xl font-inter font-semibold text-xform-blue-dark mb-3">A. Eligibility</h3>
              <p className="text-xform-gray-default mb-4">
                You must be at least 18 years old to use our Services. By agreeing to these Terms, you represent and warrant that you are at least 18 years of age.
              </p>
              <h3 className="text-xl font-inter font-semibold text-xform-blue-dark mb-3">B. User Accounts</h3>
              <p className="text-xform-gray-default mb-4">
                Some of our Services require you to create an account. You are responsible for safeguarding your account, and you agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              <h3 className="text-xl font-inter font-semibold text-xform-blue-dark mb-3">C. Acceptable Use</h3>
              <p className="text-xform-gray-default mb-4">
                You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
              </p>
              <ul className="list-disc pl-8 mb-4 text-xform-gray-default">
                <li className="mb-2">In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                <li className="mb-2">To impersonate or attempt to impersonate XformAI, an XformAI employee, another user, or any other person or entity</li>
                <li className="mb-2">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm XformAI or users of the Services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">2. Intellectual Property Rights</h2>
              <h3 className="text-xl font-inter font-semibold text-xform-blue-dark mb-3">A. XformAI Content</h3>
              <p className="text-xform-gray-default mb-4">
                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by XformAI, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <h3 className="text-xl font-inter font-semibold text-xform-blue-dark mb-3">B. Limited License</h3>
              <p className="text-xform-gray-default mb-4">
                Subject to your compliance with these Terms, XformAI grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal or internal business purposes.
              </p>
              <h3 className="text-xl font-inter font-semibold text-xform-blue-dark mb-3">C. Restrictions</h3>
              <p className="text-xform-gray-default mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-8 mb-4 text-xform-gray-default">
                <li className="mb-2">Reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services</li>
                <li className="mb-2">Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from the Services</li>
                <li className="mb-2">Access or use for any commercial purposes any part of the Services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">3. User Contributions</h2>
              <p className="text-xform-gray-default mb-4">
                The Services may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit content or materials. Any content you post to the Services will be considered non-confidential and non-proprietary.
              </p>
              <p className="text-xform-gray-default mb-4">
                You represent and warrant that all of your user contributions comply with these Terms, and you will be liable for any breach of that representation and warranty.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">4. Privacy</h2>
              <p className="text-xform-gray-default mb-4">
                Your submission of personal information through the Services is governed by our Privacy Policy. By using the Services, you consent to all actions we take with respect to your information consistent with our Privacy Policy.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">5. Changes to the Terms</h2>
              <p className="text-xform-gray-default mb-4">
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">6. Termination</h2>
              <p className="text-xform-gray-default mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-xform-gray-default mb-4">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. XFORMAI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">8. Limitation of Liability</h2>
              <p className="text-xform-gray-default mb-4">
                IN NO EVENT WILL XFORMAI, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">9. Governing Law</h2>
              <p className="text-xform-gray-default mb-4">
                These Terms and any dispute or claim arising out of, or related to, them, their subject matter or their formation shall be governed by and construed in accordance with the laws of the State of California, United States of America, without giving effect to any choice or conflict of law provisions.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-xform-blue-dark mb-4">10. Contact Us</h2>
              <p className="text-xform-gray-default mb-4">
                All feedback, comments, requests for technical support, and other communications relating to the Services should be directed to:
              </p>
              <p className="text-xform-gray-default">
                XformAI<br />
                123 AI Innovation Center<br />
                Suite 500<br />
                San Francisco, CA 94105<br />
                Email: legal@xformai.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
