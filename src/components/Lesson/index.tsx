import { format, isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';

import { LessonProps } from './types';
import { Link } from 'react-router-dom';

export const Lesson: React.FC<LessonProps> = ({ title, availableAt, type, slug }) => {
  const isAvailableLesson = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  return (
    <Link 
      to={`/event/lesson/${slug}`}
      className="
        group
      "
    >
      <span
        className="
          text-gray-300        
        "
      >
        {availableDateFormatted}
      </span>

      <div
        className="
          rounded
          border
          border-gray-500
          p-4
          mt-2
          group-hover:border-green-500
        "
      >
        <header
          className="
            flex
            items-center
            justify-between
          "
        >
          {isAvailableLesson ? (
            <span
              className="
              text-sm
              text-blue-500
              font-medium
              flex
              item-center
              gap-2
            "
            >
              <CheckCircle
                size={20}
              />
              Conteúdo liberado
            </span>

          ) : (
            <span
              className="
              text-sm
              text-orange-500
              font-medium
              flex
              item-center
              gap-2
            "
            >
              <Lock
                size={20}
              />
              Em breve
            </span>
          )}
          <span
            className="
              text-xs
              rounded
              px-2
              py-[0.125rem]
              text-white
              border
              border-green-300
              font-bold
              uppercase
            "
          >
            {type === 'live' ? 'ao vivo' : 'aula prática'}
          </span>
        </header>
        <strong
          className="
            text-gray-200
            mt-5
            block
          "
        >
          {title}
        </strong>
      </div>
    </Link>

  )
}