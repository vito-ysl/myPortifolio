interface ScrollToTopButtonProps {
  show: boolean;
  onClick: () => void;
}

export default function ScrollToTopButton({ show, onClick }: ScrollToTopButtonProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="scroll-to-top-button fixed bottom-8 right-8 w-12 h-12 bg-[#a7c957] text-[#2d353b] rounded-full flex items-center justify-center shadow-lg hover:bg-[#83c092] transition-colors duration-200 z-40"
      aria-label="Voltar ao topo"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7-7m0 0L5 14m7-7v12"
        />
      </svg>
    </button>
  );
}
