// import { useEffect, useRef } from 'react';

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (window.innerWidth < 1024) return;
//     document.body.style.cursor = 'none';

//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     const onMove = (e: MouseEvent) => {
//       cursor.style.left = e.clientX + 'px';
//       cursor.style.top = e.clientY + 'px';
//     };

//     window.addEventListener('mousemove', onMove);

//     return () => {
//       window.removeEventListener('mousemove', onMove);
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed left-0 top-0 z-[99999] hidden lg:block"
//       style={{
//         width: '8px',
//         height: '8px',
//         backgroundColor: '#188b88',
//         borderRadius: '50%',
//         transform: 'translate(-50%, -50%)',
//       }}
//     />
//   );
// }
