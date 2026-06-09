import { Header } from "./component/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-full flex flex-col dark:bg-slate-900">
          <Header />  
          
          {children}
      </div>
  );
}