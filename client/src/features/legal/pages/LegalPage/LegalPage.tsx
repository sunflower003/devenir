import PageWrapper from '@/shared/components/PageWrapper/PageWrapper';
import SEO from '@/shared/components/SEO/SEO';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/core/constants/routes';
import styles from './LegalPage.module.css';

const LegalPage = () => {
    return (
        <PageWrapper>
            <SEO
                title="Privacy Policy & Terms of Service | Devenir"
                description="Read Devenir's Privacy Policy and Terms of Service."
            />

            <section className={styles.page}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <p className={styles.eyebrow}>Devenir Legal</p>
                        <h1>Privacy Policy & Terms of Service</h1>
                        <p className={styles.updatedAt}>Last updated: April 25, 2026</p>
                        <p className={styles.notice}>
                            Devenir is a project built for educational and portfolio-learning purposes.
                        </p>
                    </header>

                    <article className={styles.block}>
                        <h2>Privacy Policy</h2>
                        <p>
                            Devenir collects personal data needed to provide our fashion e-commerce services,
                            including account details, order information, shipping data, payment references, and
                            interactions across website features such as product browsing and visual search.
                        </p>
                        <p>
                            We process data to fulfill orders, provide customer support, secure transactions,
                            improve site performance, personalize product recommendations, and maintain service
                            reliability across client, admin, and server systems.
                        </p>
                        <p>
                            Payment data is handled through trusted providers, and Devenir stores only the minimum
                            required references for order verification and fraud prevention. We apply appropriate
                            technical and organizational safeguards to protect your information.
                        </p>
                        <p>
                            We may share data with logistics partners, payment processors, analytics providers, and
                            infrastructure vendors only when necessary to operate the platform. We do not sell your
                            personal information.
                        </p>
                        <p>
                            You may request access, correction, or deletion of your personal data by contacting
                            our support team. We retain data for as long as needed to meet legal, tax, security,
                            and operational obligations.
                        </p>
                        <p>
                            For data removal requests, please visit our{' '}
                            <Link to={ROUTES.LEGAL.USER_DATA_DELETION} className={styles.link}>
                                User Data Deletion page
                            </Link>.
                        </p>
                    </article>

                    <article className={styles.block}>
                        <h2>Terms of Service</h2>
                        <p>
                            By accessing and using Devenir, you agree to use the platform lawfully and provide
                            accurate account, shipping, and payment information when placing orders.
                        </p>
                        <p>
                            Product availability, prices, promotions, and shipping timelines may change without prior
                            notice. We reserve the right to refuse or cancel orders when fraud, abuse, pricing errors,
                            stock issues, or policy violations are identified.
                        </p>
                        <p>
                            You are responsible for maintaining the confidentiality of your account credentials and
                            for all activities performed under your account.
                        </p>
                        <p>
                            All platform content, branding, and visual assets are owned by Devenir or licensed to
                            Devenir and are protected by applicable intellectual property laws.
                        </p>
                        <p>
                            To the extent permitted by law, Devenir is not liable for indirect, incidental, or
                            consequential damages resulting from use of the platform. These terms are governed by
                            applicable local laws where Devenir operates.
                        </p>
                    </article>
                </div>
            </section>
        </PageWrapper>
    );
};

export default LegalPage;
