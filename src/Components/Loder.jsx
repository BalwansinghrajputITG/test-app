const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] p-5 max-w-[170px] flex flex-col items-center">
  <div
    className="w-10 aspect-square rounded-full text-center"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      animation: "l1 2s infinite cubic-bezier(0.3,1,0,1)",
      background: "#f03355",
    }}
  ></div>
  <p className="mt-2 text-sm font-medium text-white">Loading...</p>
  <style>
    {`
      @keyframes l1 {
        33% {
          border-radius: 0;
          background: #8f85d8;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        66% {
          border-radius: 0;
          background: #ffa516;
          clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
        }
      }
    `}
  </style>
</div>
  );
};

export default Loader;
