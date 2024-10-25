import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Container>
        <ContentWrapper>
          <TitleWrapper className="text-center">
            <PolicyWrapper className="terms">
              <Section className="text-left">
                <h1 style={{ fontSize: '2.5rem' }}>Terms and Conditions</h1>
                <Paragraph>Last updated: October 7, 2024</Paragraph>
                <Paragraph>
                  Welcome to Seccouncil! These Terms and Conditions outline the rules and regulations for the use of Seccouncil's website and services. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>1. Acceptance of Terms</Heading2>
                <Paragraph>
                  By using our website, enrolling in our training programs, or using our job placement and consultancy services, you agree to comply with and be bound by these Terms and Conditions, along with our Privacy Policy.
                  If you do not agree with any part of these terms, you are prohibited from using or accessing our website and services.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>2. Services</Heading2>
                <Paragraph>Seccouncil provides:</Paragraph>
                <Paragraph>
                  Cybersecurity training programs with job placement support.
                  Consultancy services related to cybersecurity and IT.
                  Other services as listed on our website.
                  We reserve the right to modify or discontinue our services at any time without prior notice.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>3. Eligibility</Heading2>
                <Paragraph>To access our services:</Paragraph>
                <Paragraph>
                  You must be at least 18 years old or have parental consent.
                  You must provide accurate and complete information when registering for our programs or services.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>4. User Obligations</Heading2>
                <Paragraph>
                  When using our website and services, you agree that you will not:
                </Paragraph>
                <Paragraph>
                  Use the website or services for any illegal or unauthorized purpose.
                  Share, distribute, or misuse any content or materials provided by Seccouncil, including training resources, without permission.
                  Interfere with or disrupt the website’s functionality or servers.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>5. Enrollment and Payment</Heading2>
                <Paragraph>
                  By enrolling in our training programs, you agree to:
                </Paragraph>
                <Paragraph>
                  Pay any applicable fees as listed on the website for the selected courses or consultancy services.
                  Follow the course requirements, including attendance and assessments.
                  Payments must be made through the methods specified on our website. Fees are non-refundable unless otherwise specified by our refund policy.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>6. Job Placement Services</Heading2>
                <Paragraph>
                  Our job placement services aim to support you in securing employment after completing a training program. However:
                </Paragraph>
                <Paragraph>
                  We do not guarantee job placement or employment.
                  The success of job placement depends on various factors, including the candidate’s performance, skills, and job market conditions.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>7. Consultancy Services</Heading2>
                <Paragraph>
                  For consultancy services:
                </Paragraph>
                <Paragraph>
                  We provide recommendations and advice based on our expertise.
                  While we strive to provide accurate and up-to-date information, the final decision and responsibility lie with the client.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>8. Intellectual Property</Heading2>
                <Paragraph>
                  All content and materials available on the Seccouncil website, including but not limited to text, graphics, logos, videos, and software, are the intellectual property of Seccouncil or its licensors and are protected by copyright and trademark laws.
                </Paragraph>
                <Paragraph>
                  You may not reproduce, duplicate, or redistribute any content from our website without prior written consent from Seccouncil.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>9. Limitation of Liability</Heading2>
                <Paragraph>
                  To the fullest extent permitted by law:
                </Paragraph>
                <Paragraph>
                  Seccouncil will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website, services, or reliance on the information provided.
                  We do not guarantee that the website will be free from errors or interruptions.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>10. Indemnification</Heading2>
                <Paragraph>
                  You agree to indemnify, defend, and hold harmless Seccouncil and its affiliates from any claims, liabilities, damages, losses, or expenses arising from your use of the website, violation of these terms, or infringement of any third-party rights.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>11. Third-Party Links
                </Heading2>
                <Paragraph>
                  Our website may contain links to third-party websites. These links are provided for your convenience, but we do not endorse or take responsibility for the content or practices of any third-party websites.

                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>12. Termination
                </Heading2>
                <Paragraph>
                  We reserve the right to terminate or suspend your access to our website and services at any time, without notice, for any reason, including if we believe you have violated these Terms and Conditions.

                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>13. Governing Law
                </Heading2>
                <Paragraph>
                  These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.

                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>14. Changes to Terms
                </Heading2>
                <Paragraph>
                  Seccouncil reserves the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of our services after any changes indicates your acceptance of the new terms.

                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>15. Contact Us
                </Heading2>
                <Paragraph>
                  If you have any questions or concerns about these Terms and Conditions, please contact us at:
                </Paragraph>
                <Paragraph>Seccouncil</Paragraph>
                <Paragraph>[Insert Company Address]
                </Paragraph>
                <Paragraph>Email: [Insert Contact Email]
                </Paragraph>
                <Paragraph>Phone: [Insert Contact Number]</Paragraph>
              </Section>

            </PolicyWrapper>
          </TitleWrapper>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
    padding: 0;
    margin: 0 auto;
    max-width: 90vw;
    display: flex;
    justify-content: center;
  `;

const ContentWrapper = styled.div`
    margin: 2.5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `;

const TitleWrapper = styled.div`
    text-align: center;
    width: 100%;
  `;

const PolicyWrapper = styled.div`
    padding: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    color: white;
    line-height: 1.6;
  `;

const Section = styled.section`
    margin: 1.25rem 0;
  `;

const Heading2 = styled.h2`
    font-size: 1.5rem;
    margin-top: 1.25rem;
  `;

const SubSection = styled.div`
    margin-top: 1rem;
  `;

const SubHeading3 = styled.h3`
    font-size: 1.25rem;
    margin-top: 1rem;
  `;

const Paragraph = styled.p`
    margin: 0.625rem 0;
  `;

export default TermsAndConditions;