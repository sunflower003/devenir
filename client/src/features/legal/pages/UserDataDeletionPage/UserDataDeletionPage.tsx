import PageWrapper from '@/shared/components/PageWrapper/PageWrapper';
import SEO from '@/shared/components/SEO/SEO';
import styles from './UserDataDeletionPage.module.css';

const UserDataDeletionPage = () => {
    return (
        <PageWrapper>
            <SEO
                title="User Data Deletion | Devenir"
                description="How to request deletion of your user data on Devenir."
            />

            <section className={styles.page}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <p className={styles.eyebrow}>Devenir Legal</p>
                        <h1>User Data Deletion</h1>
                        <p className={styles.updatedAt}>Last updated: April 25, 2026</p>
                        <p className={styles.notice}>
                            Devenir is built for educational and portfolio-learning purposes.
                        </p>
                    </header>

                    <article className={styles.block}>
                        <h2>How to request deletion</h2>
                        <p>
                            If you want your Devenir account data removed, send a request to
                            {' '}customerservice@devenir.com using the subject line: <strong>Data Deletion Request</strong>.
                        </p>
                        <p>
                            Please include the email linked to your account and optional order references so our team
                            can verify and process your request accurately.
                        </p>
                    </article>

                    <article className={styles.block}>
                        <h2>What data may be deleted</h2>
                        <p>
                            We will remove personal profile data and account-linked preferences where technically and
                            legally possible, including saved profile fields and platform usage references tied to your account.
                        </p>
                    </article>

                    <article className={styles.block}>
                        <h2>Retention exceptions</h2>
                        <p>
                            Certain records may be retained for compliance, fraud prevention, dispute handling, and
                            financial/legal obligations, even after a deletion request is completed.
                        </p>
                    </article>
                </div>
            </section>
        </PageWrapper>
    );
};

export default UserDataDeletionPage;
