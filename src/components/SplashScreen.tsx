import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashScreen = (): JSX.Element => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate('/home'), 200); // Faster redirect
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10); // 3x faster interval

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <img
        src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681cf01d6b471c9a2e97b9ce.png"
        alt="Splash"
        className="w-full max-w-[225px] mb-8"
      />
      
      <div className="w-full max-w-[300px] relative">
        <div className="w-full h-2 bg-gray-200">
          <div 
            className="h-full bg-black transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,0,0,0.7)] relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 blur-[2px]" />
          </div>
        </div>
        <div className="mt-4 text-center font-['Poppins'] font-bold text-sm" style={{ textShadow: '0 0 8px rgba(0,0,0,0.3)' }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};
