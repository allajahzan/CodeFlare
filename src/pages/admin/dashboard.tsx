function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      <div className="rounded-3xl w-full h-[400px] bg-zinc-100 p-4"></div>
      <div className="rounded-3xl w-full h-[400px] bg-zinc-100 p-4"></div>
      <div className="rounded-3xl w-full h-[400px] bg-zinc-100 p-4 col-span-3"></div>
    </div>
  );
}

export default Dashboard;
