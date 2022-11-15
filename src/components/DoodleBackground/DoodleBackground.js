import 'css-doodle';
import './DoodleBackground.css';

export default function DoodleBackground () {
    return (
        <div className='doodle-background'>
        <css-doodle>{`
        :doodle {
            @grid: 500x1/ 40vmin;
          }
          :container {
            perspective: 10vmin;
          }
          
          @place-cell: center;
          @size: 40% 1px;
          
          will-change: transform, opacity;
          transform-style: preserve-3d;
          
          background: linear-gradient(to left,
            @multi(@p([2-4]), @p(#272F40, #86AE94, #E3C7E0, #BAE5C0)),
            transparent @r(50%)
          );
        
          animation: move @r(2s, 4s, .5) linear infinite;
          animation-delay: -@r(.5s, 5s);
        
          --trans:
            translateX(50%)
            rotateX(@r(-180deg, 180deg))
            rotateY(@r(-180deg, 180deg))
            rotateZ(@r(-180deg, 180deg));
        
          transform-origin: 0 center;
          transform: var(--trans) scale(4);
          opacity: 0;
        
          @keyframes move {
            20% { opacity: 1; }
            100% { transform: var(--trans) scale(0); }
          }
        `}</css-doodle></div>
      );
    }