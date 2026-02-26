import { HeroSection } from '@/components/home/HeroSection';
import { FeatureShowcase } from '@/components/home/FeatureShowcase';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeatureShowcase />

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Mission Control OS — Built for the relentless
        </p>
      </footer>
    </main>
  );
}
