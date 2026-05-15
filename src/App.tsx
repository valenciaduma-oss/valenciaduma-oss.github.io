import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Shield, 
  Upload as UploadIcon, 
  Bell, 
  User as UserIcon, 
  ChevronRight, 
  FileText, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Search,
  Plus,
  ArrowRight,
  LogOut,
  Camera,
  Download,
  Share2,
  MoreVertical,
  X,
  CreditCard,
  Stethoscope,
  GraduationCap,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { View } from './types';
import { mockUser, mockDocuments, mockNotifications, mockMedicalRecords, mockSassaGrant } from './mockData';

// --- Components ---

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-dali-green flex flex-col items-center justify-center z-50">
      <div className="absolute top-0 h-1 bg-dali-yellow w-full" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-dali-yellow rounded-xl flex items-center justify-center mb-6 shadow-inner">
          <span className="text-dali-green font-black text-4xl">D</span>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-widest mb-2">D.A.L.I</h1>
        <p className="text-dali-yellow text-[10px] font-medium tracking-widest uppercase text-center max-w-xs">
          Khaya_Lami Digital Technologies
        </p>
      </motion.div>
      <motion.div 
        className="absolute bottom-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white/60 text-[10px] uppercase tracking-widest mb-4">Initialising Protocol</p>
        <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-dali-yellow"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
        <p className="text-white/30 text-[10px] mt-8 uppercase tracking-widest font-bold">One Identity. One Platform. Endless Access.</p>
      </motion.div>
    </div>
  );
};

const Onboarding = ({ onFinish }: { onFinish: () => void }) => {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      title: "One Identity Platform",
      description: "Digital Access & Lifecycle Integration for every South African citizen.",
      icon: <div className="w-16 h-16 bg-dali-yellow rounded-xl flex items-center justify-center shadow-inner"><span className="text-dali-green font-black text-2xl">D</span></div>
    },
    {
      title: "Secure Digital Vault",
      description: "Access your ID, SASSA, and Medical records anywhere, with government-grade security.",
      icon: <Shield className="w-16 h-16 text-dali-green" />
    },
    {
      title: "Khaya_Lami Tech",
      description: "Empowering communities through innovative digital document centralization.",
      icon: <Activity className="w-16 h-16 text-dali-green" />
    }
  ];

  const handleNext = () => {
    if (slide < slides.length - 1) setSlide(slide + 1);
    else onFinish();
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 bg-gray-50 rounded-[32px] flex items-center justify-center mb-10 shadow-sm">
              {slides[slide].icon}
            </div>
            <h2 className="text-3xl font-light mb-4">My <span className="font-bold text-dali-green">{slides[slide].title}</span></h2>
            <p className="text-gray-400 leading-relaxed text-base max-w-xs">{slides[slide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="p-8 pb-12 flex flex-col items-center">
        <div className="flex gap-2 mb-10">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-dali-green" : "w-1.5 bg-gray-200"}`} />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-full bg-dali-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          {slide === slides.length - 1 ? "Start Integration" : "Next Protocol"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-dali-green">
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-dali-green">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-sm"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-dali-yellow w-12 h-12 rounded-xl flex items-center justify-center shadow-inner">
               <span className="text-dali-green font-black text-2xl">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight leading-none">D.A.L.I</h1>
              <p className="text-dali-yellow text-[10px] font-medium tracking-widest uppercase">Khaya_Lami Tech</p>
            </div>
          </div>
          <h2 className="text-2xl font-light text-white mb-2">Citizen <span className="font-bold">Authentication</span></h2>
          <p className="text-white/40 text-sm mb-8">Access your lifecycle records securely.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-white/80 text-sm font-medium ml-1">ID Number or Email</label>
              <input 
                type="text" 
                placeholder="demo@dali.co.za" 
                defaultValue="demo@dali.co.za"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-dali-yellow transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-white/80 text-sm font-medium ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                defaultValue="123456"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-dali-yellow transition-colors"
              />
            </div>
            <div className="flex justify-end pt-1">
              <button type="button" className="text-dali-yellow text-sm font-medium">Forgot Password?</button>
            </div>
            <button 
              disabled={loading}
              className="w-full bg-dali-yellow text-dali-green py-4 rounded-xl font-bold shadow-lg mt-4 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-dali-green border-t-transparent rounded-full animate-spin" />
              ) : "Login"}
            </button>
          </form>

          <div className="mt-10 text-center space-y-4">
            <p className="text-white/50 text-sm">Don't have an account?</p>
            <button className="w-full border border-white/30 text-white font-bold py-4 rounded-xl hover:bg-white/5 transition-colors">
              Create My Identity
            </button>
          </div>
        </motion.div>
      </div>
      <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="flex items-center justify-center gap-4 text-xs">
          <span className="text-white/40">Demo Login:</span>
          <span className="text-dali-yellow">demo@dali.co.za</span>
          <span className="text-white/40 font-bold">|</span>
          <span className="text-dali-yellow">123456</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ user, setView }: { user: any, setView: (v: View) => void }) => {
  return (
    <div className="pb-24">
      {/* Header */}
      <header className="p-6 pb-2">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-gray-500 font-medium">Welcome back,</h1>
            <h2 className="text-2xl font-bold text-dali-green">{user.fullName}</h2>
          </div>
          <button 
            onClick={() => setView(View.Notifications)}
            className="p-3 bg-gray-100 rounded-full relative"
          >
            <Bell className="w-6 h-6 text-dali-green" />
            <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
          </button>
        </div>

        {/* Identity Card */}
        <div className="bg-dali-green rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-dali-yellow/20 rounded-full -mr-10 -mt-10 blur-2xl" />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-10">
              <Shield className="w-10 h-10 text-dali-yellow" />
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-white/60">Digital Identity Card</p>
                <p className="text-xs font-bold text-dali-yellow">VERIFIED CITIZEN</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">ID Number</p>
                <p className="text-lg font-mono tracking-wider">{user.idNumber}</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Status</p>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-dali-yellow" />
                    <span className="text-xs font-bold">Active & Valid</span>
                  </div>
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Services */}
      <section className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-dali-green">Central Services</h3>
          <button className="text-dali-yellow text-sm font-bold">See All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ServiceCard 
            icon={<FileText className="w-6 h-6" />}
            title="Digital Vault"
            count={mockDocuments.length}
            color="border-l-4 border-dali-green shadow-sm"
            onClick={() => setView(View.Vault)}
          />
          <ServiceCard 
            icon={<CreditCard className="w-6 h-6" />}
            title="SASSA Records"
            count={1}
            color="border-l-4 border-dali-yellow shadow-sm"
            onClick={() => setView(View.SASSA)}
          />
          <ServiceCard 
            icon={<Stethoscope className="w-6 h-6" />}
            title="Medical Files"
            count={mockMedicalRecords.length}
            color="border-l-4 border-rose-500 shadow-sm"
            onClick={() => setView(View.Medical)}
          />
          <ServiceCard 
            icon={<GraduationCap className="w-6 h-6" />}
            title="Academic"
            count={1}
            color="border-l-4 border-blue-500 shadow-sm"
            onClick={() => {}}
          />
        </div>
      </section>

      {/* Recent Activity */}
      <section className="px-6 mt-10">
        <h3 className="font-bold text-lg text-dali-green mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {mockNotifications.slice(0, 2).map((notif) => (
            <ActivityItem key={notif.id} notif={notif} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, count, color, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`bg-white p-5 rounded-[32px] flex flex-col items-start gap-4 transition-all hover:shadow-md active:scale-95 text-left w-full ${color}`}
  >
    <div className="p-3 bg-gray-50 rounded-2xl">
      {icon}
    </div>
    <div>
      <p className="font-bold text-dali-charcoal">{title}</p>
      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">{count} Documents</p>
    </div>
  </button>
);

const ActivityItem = ({ notif }: any) => (
  <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
      {notif.type === 'success' ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <Clock className="w-6 h-6 text-dali-yellow" />}
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-sm text-dali-green">{notif.title}</h4>
      <p className="text-xs text-gray-500 line-clamp-1">{notif.message}</p>
      <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold">{notif.time}</p>
    </div>
  </div>
);

const Vault = ({ documents }: { documents: any[] }) => {
  return (
    <div className="p-6 pb-24 h-full overflow-y-auto">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-light">My <span className="font-bold text-dali-green">Digital Vault</span></h1>
          <p className="text-xs text-gray-400 mt-1">Lifecycle document centralized integration.</p>
        </div>
      </header>

      <div className="bg-white px-4 py-2 rounded-full border border-gray-100 flex items-center gap-3 shadow-sm mb-8">
        <Search className="w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search documents..." 
          className="bg-transparent text-sm focus:outline-none flex-1 text-gray-600 py-2"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className={`bg-white p-6 rounded-[32px] shadow-sm border-l-4 flex flex-col justify-between group hover:shadow-lg transition-all ${
            doc.status === 'Verified' || doc.status === 'Approved' ? "border-dali-green" : "border-dali-yellow"
          }`}>
            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-50 p-3 rounded-2xl">
                <FileText className={`w-6 h-6 ${
                   doc.status === 'Verified' || doc.status === 'Approved' ? "text-dali-green" : "text-dali-yellow"
                }`} />
              </div>
              <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                doc.status === 'Verified' || doc.status === 'Approved' ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {doc.status}
              </span>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800">{doc.name}</h4>
              <p className="text-xs text-gray-400">{doc.type} • {doc.date}</p>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="flex-1 bg-dali-green text-white py-2.5 rounded-xl text-xs font-bold shadow-sm">View Vault Copy</button>
              <button className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100"><Download className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white/50 border border-dashed border-gray-300 p-8 rounded-[32px] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white transition-all">
        <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
          <Plus className="w-5 h-5 text-dali-green" />
        </div>
        <p className="text-sm font-bold text-dali-green">Upload New Document</p>
        <p className="text-[10px] text-gray-400">PDF, PNG, JPG supported</p>
      </div>
    </div>
  );
};

const Upload = () => {
  const [stage, setStage] = useState<'idle' | 'scanning' | 'complete'>('idle');

  const startScan = () => {
    setStage('scanning');
    setTimeout(() => {
      setStage('complete');
    }, 3000);
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-dali-green mb-2">Upload Document</h1>
        <p className="text-gray-500">Scan or upload files to your digital vault.</p>
      </header>

      {stage === 'idle' && (
        <div className="flex-1 flex flex-col gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex-1 border-3 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center p-10 text-center group cursor-pointer"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-dali-yellow/10 transition-colors">
              <UploadIcon className="w-10 h-10 text-gray-400 group-hover:text-dali-yellow" />
            </div>
            <h3 className="font-bold text-lg mb-2">Drag & Drop</h3>
            <p className="text-sm text-gray-500">Upload PDF, JPG, or PNG files up to 10MB.</p>
          </motion.div>

          <button 
            onClick={startScan}
            className="w-full bg-dali-green text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg"
          >
            <Camera className="w-6 h-6" />
            Smart Camera Scan
          </button>
        </div>
      )}

      {stage === 'scanning' && (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-64 h-80 border-4 border-dali-yellow rounded-2xl overflow-hidden">
             {/* Mock Scan Animation */}
             <motion.div 
                className="absolute inset-x-0 h-1 bg-dali-yellow shadow-[0_0_15px_rgba(250,204,21,0.8)] z-10"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
             <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <FileText className="w-20 h-20 text-gray-300" />
             </div>
          </div>
          <h3 className="mt-10 font-bold text-xl text-dali-green animate-pulse">Scanning Document...</h3>
          <p className="text-gray-500 mt-2">Extracting data via AI Integration</p>
        </div>
      )}

      {stage === 'complete' && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center p-10"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-dali-green mb-4">Upload Successful!</h3>
          <p className="text-gray-500 mb-10">Your document has been added to the Digital Vault and is awaiting verification.</p>
          <div className="w-full space-y-4">
            <button className="w-full bg-dali-green text-white py-4 rounded-xl font-bold">View in Vault</button>
            <button onClick={() => setStage('idle')} className="w-full text-dali-green font-bold">Upload More</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MedicalRecords = () => {
  return (
    <div className="p-6 pb-24 h-full overflow-y-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-dali-green mb-2">Medical History</h1>
        <p className="text-gray-500">Integrated healthcare records from all facilities.</p>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-rose-50 p-4 rounded-2xl">
          <p className="text-[10px] uppercase font-bold text-rose-600 mb-1">Blood Type</p>
          <p className="text-2xl font-bold text-rose-900">O Positive</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-2xl">
          <p className="text-[10px] uppercase font-bold text-emerald-600 mb-1">Status</p>
          <p className="text-2xl font-bold text-emerald-900">Healthy</p>
        </div>
      </div>

      <h3 className="font-bold text-lg text-dali-green mb-4">Recent Consultations</h3>
      <div className="space-y-4">
        {mockMedicalRecords.map((record, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-dali-green">{record.facility}</h4>
                <p className="text-xs text-gray-500">{record.date}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <Stethoscope className="w-4 h-4 text-rose-500" />
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Reason</p>
                <p className="font-medium">{record.reason}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Doctor</p>
                <p className="font-medium">{record.doctor}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50 flex gap-4">
              <button className="flex items-center gap-1 text-xs font-bold text-dali-green"><Download className="w-3 h-3" /> Report</button>
              <button className="flex items-center gap-1 text-xs font-bold text-dali-green"><ChevronRight className="w-3 h-3" /> View Notes</button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-5 border-2 border-dashed border-gray-200 rounded-2xl font-bold text-gray-400 flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" /> Request Older Records
      </button>
    </div>
  );
};

const SASSA = () => {
  return (
    <div className="p-6 pb-24 h-full overflow-y-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-dali-green mb-2">SASSA Grants</h1>
        <p className="text-gray-500">Track and manage your social grant status.</p>
      </header>

      <div className="bg-dali-yellow rounded-3xl p-6 mb-8 text-dali-green shadow-lg">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="font-bold text-xl">{mockSassaGrant.type}</h3>
            <p className="text-xs opacity-70">Ref: {mockSassaGrant.reference}</p>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
             {mockSassaGrant.status}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between border-b border-dali-green/10 pb-4">
            <span className="text-xs font-medium opacity-60">Application Date</span>
            <span className="font-bold">{mockSassaGrant.applicationDate}</span>
          </div>
          <div className="flex justify-between border-b border-dali-green/10 pb-4">
            <span className="text-xs font-medium opacity-60">Grant Amount</span>
            <span className="text-2xl font-black">{mockSassaGrant.amount}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="text-xs font-medium opacity-60">Next Payment</span>
            <div className="text-right">
              <span className="font-bold block">{mockSassaGrant.nextPaymentDate}</span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-green-900/10 rounded-full">Automated Deposit</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-lg text-dali-green mb-4">Required Documents</h3>
      <div className="space-y-4">
        {['Proof of Disability.pdf', 'Bank Statement_March.pdf'].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 rounded-xl">
                 <FileText className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-sm font-bold text-dali-green">{item}</span>
            </div>
            <button className="text-dali-yellow"><Download className="w-5 h-5" /></button>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 bg-dali-green text-white py-4 rounded-xl font-bold">New Application</button>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="p-6 pb-24 h-full overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-dali-green">Alerts</h1>
        <button className="text-dali-yellow text-sm font-bold">Mark all as read</button>
      </header>

      <div className="space-y-4">
        {mockNotifications.map((notif) => (
          <div key={notif.id} className={`p-5 rounded-3xl border ${notif.read ? "bg-white border-gray-100" : "bg-emerald-50/50 border-emerald-100 shadow-sm"}`}>
            <div className="flex justify-between items-start mb-2">
               <h4 className="font-bold text-dali-green">{notif.title}</h4>
               {!notif.read && <div className="w-2 h-2 bg-dali-yellow rounded-full" />}
            </div>
            <p className="text-sm text-gray-600 mb-4">{notif.message}</p>
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{notif.time}</span>
              {notif.type === 'alert' && (
                <button className="text-xs font-bold text-dali-green bg-dali-yellow/20 px-4 py-2 rounded-xl">Handle Request</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Profile = ({ user, onLogout }: { user: any, onLogout: () => void }) => {
  return (
    <div className="p-6 pb-24">
      <header className="flex flex-col items-center mb-10 pt-6">
        <div className="relative mb-4">
          <img 
            src={user.profilePhoto} 
            alt={user.fullName} 
            className="w-32 h-32 rounded-3xl object-cover border-4 border-dali-yellow shadow-xl" 
          />
          <button className="absolute bottom-[-10px] right-[-10px] bg-dali-green text-white p-3 rounded-2xl shadow-lg border-4 border-white">
            <Camera className="w-5 h-5" />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-dali-green">{user.fullName}</h2>
        <p className="text-gray-500 font-mono text-sm">{user.idNumber}</p>
      </header>

      <section className="space-y-3 mb-10">
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
           <MapPin className="w-5 h-5 text-gray-400" />
           <div>
             <p className="text-[10px] uppercase font-bold text-gray-400">Fixed Address</p>
             <p className="text-sm font-medium">{user.address}</p>
           </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
           <Activity className="w-5 h-5 text-gray-400" />
           <div>
             <p className="text-[10px] uppercase font-bold text-gray-400">Contact</p>
             <p className="text-sm font-medium">{user.contactNumber}</p>
           </div>
        </div>
      </section>

      <div className="space-y-4">
        <ProfileButton icon={<CheckCircle2 className="w-5 h-5" />} label="Security Settings" />
        <ProfileButton icon={<Shield className="w-5 h-5" />} label="Biometric Access" />
        <ProfileButton icon={<CheckCircle2 className="w-5 h-5" />} label="Verification Log" />
        <button 
          onClick={onLogout}
          className="w-full mt-6 py-5 bg-rose-50 text-rose-600 rounded-3xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-300">Software Version 1.0.4 - DAL-001</p>
      </div>
    </div>
  );
};

const ProfileButton = ({ icon, label }: any) => (
  <button className="w-full bg-white p-5 rounded-3xl border border-gray-100 flex items-center justify-between group active:scale-95 transition-transform">
    <div className="flex items-center gap-4">
      <div className="text-gray-400 group-hover:text-dali-green transition-colors">{icon}</div>
      <span className="font-bold text-dali-green">{label}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-300" />
  </button>
);

const BottomNav = ({ currentView, setView }: { currentView: View, setView: (v: View) => void }) => {
  const tabs = [
    { id: View.Dashboard, icon: <Home className="w-6 h-6" />, label: 'Home' },
    { id: View.Vault, icon: <Shield className="w-6 h-6" />, label: 'Vault' },
    { id: View.Upload, icon: <UploadIcon className="w-6 h-6" />, label: 'Upload' },
    { id: View.Notifications, icon: <Bell className="w-6 h-6" />, label: 'Inbox' },
    { id: View.Profile, icon: <UserIcon className="w-6 h-6" />, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white bottom-nav-shadow px-4 pt-4 pb-8 flex justify-between items-center z-40 border-t border-gray-100">
      {tabs.map((tab) => {
        const isActive = currentView === tab.id;
        return (
          <button 
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`flex flex-col items-center gap-1 min-w-[64px] transition-all duration-300 ${isActive ? "text-dali-green scale-110" : "text-gray-400"}`}
          >
            <div className={`p-2 rounded-2xl transition-colors ${isActive ? "bg-dali-yellow/20" : ""}`}>
              {tab.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>(View.Splash);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auto-finish splash
  const handleSplashFinish = () => {
    setView(View.Onboarding);
  };

  const handleOnboardingFinish = () => {
    setView(View.Login);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setView(View.Dashboard);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView(View.Login);
  };

  // Nav views handling
  const showNav = isAuthenticated && [
    View.Dashboard, View.Vault, View.Upload, View.Notifications, View.Profile, View.Medical, View.SASSA
  ].includes(view);

  return (
    <div className="max-w-[440px] mx-auto h-[100dvh] bg-white text-dali-charcoal overflow-hidden shadow-2xl relative font-sans">
      <AnimatePresence mode="wait">
        {view === View.Splash && (
          <motion.div key="splash" exit={{ opacity: 0 }} className="h-full">
            <SplashScreen onFinish={handleSplashFinish} />
          </motion.div>
        )}

        {view === View.Onboarding && (
          <motion.div key="onboarding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
            <Onboarding onFinish={handleOnboardingFinish} />
          </motion.div>
        )}

        {view === View.Login && (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
            <Login onLogin={handleLogin} />
          </motion.div>
        )}

        {isAuthenticated && (
          <motion.main 
            key="main" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="h-full overflow-y-auto bg-white pt-2"
          >
            <AnimatePresence mode="wait">
              {view === View.Dashboard && (
                <motion.div key="dash" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <Dashboard user={mockUser} setView={setView} />
                </motion.div>
              )}
              {view === View.Vault && (
                <motion.div key="vault" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <Vault documents={mockDocuments} />
                </motion.div>
              )}
              {view === View.Upload && (
                <motion.div key="upload" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <Upload />
                </motion.div>
              )}
              {view === View.Medical && (
                <motion.div key="medical" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <MedicalRecords />
                </motion.div>
              )}
              {view === View.SASSA && (
                <motion.div key="sassa" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <SASSA />
                </motion.div>
              )}
              {view === View.Notifications && (
                <motion.div key="notif" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <Notifications />
                </motion.div>
              )}
              {view === View.Profile && (
                <motion.div key="profile" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <Profile user={mockUser} onLogout={handleLogout} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>

      {showNav && (
        <motion.div 
          initial={{ y: 100 }} 
          animate={{ y: 0 }} 
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          <BottomNav currentView={view} setView={setView} />
        </motion.div>
      )}

      {/* Floating Action Hint for Prototype */}
      {!isAuthenticated && view === View.Login && (
        <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1 rounded-full z-50 pointer-events-none opacity-50">
          PROTOTYPE DEMO MODE
        </div>
      )}
    </div>
  );
}
