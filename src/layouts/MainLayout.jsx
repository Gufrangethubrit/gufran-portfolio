import { Outlet } from "react-router-dom";
import BlurCompo from "../components/BlurCompo";
import { TopHeader } from "../components/TopHeader/TopHeader";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <div className='min-h-screen' style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a3e 20%, #2d1b4e 40%, #1a0f2e 60%, #0a0a1a 80%, #000000 100%), radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.12) 0%, transparent 60%), radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
      }}>
      <BlurCompo
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <div className='relative'>
        <TopHeader />
        <Navbar />
        
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
