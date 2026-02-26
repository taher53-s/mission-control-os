import { DominantHero } from '@/components/home/DominantHero';
import { PowerStatement } from '@/components/home/PowerStatement';
import { FeatureStories } from '@/components/home/FeatureStories';
import { PerformanceVisual } from '@/components/home/PerformanceVisual';
import { FinalImpact } from '@/components/home/FinalImpact';

export default function HomePage() {
  return (
    <main>
      <DominantHero />
      <PowerStatement />
      <FeatureStories />
      <PerformanceVisual />
      <FinalImpact />
    </main>
  );
}
