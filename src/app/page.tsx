import { DominantHero } from '@/components/home/DominantHero';
import { PowerStatement } from '@/components/home/PowerStatement';
import { FeatureStories } from '@/components/home/FeatureStories';
import { PerformanceVisual } from '@/components/home/PerformanceVisual';
import { FinalImpact } from '@/components/home/FinalImpact';
import { ScrollSection } from '@/components/home/ScrollSection';
import { AmbientOverlay } from '@/components/home/AmbientOverlay';

export default function HomePage() {
  return (
    <main>
      <AmbientOverlay />
      <ScrollSection index={0} lightColor="rgba(56,189,248,0.03)">
        <DominantHero />
      </ScrollSection>
      <ScrollSection index={1} lightColor="rgba(139,92,246,0.04)">
        <PowerStatement />
      </ScrollSection>
      <ScrollSection index={2} lightColor="rgba(217,70,239,0.03)">
        <FeatureStories />
      </ScrollSection>
      <ScrollSection index={3} lightColor="rgba(34,197,94,0.03)">
        <PerformanceVisual />
      </ScrollSection>
      <ScrollSection index={4} lightColor="rgba(56,189,248,0.04)">
        <FinalImpact />
      </ScrollSection>
    </main>
  );
}
