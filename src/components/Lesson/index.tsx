import { format, isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
import classnames from 'classnames';

import { LessonProps } from './types';
import { Link, useParams } from 'react-router-dom';

export const Lesson: React.FC<LessonProps> = ({ title, availableAt, type, slug }) => {
  const { slug: videoSlug } = useParams<{ slug: string }>();

  const isAvailableLesson = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  const isActiveLesson = videoSlug === slug;

  return (
    <Link 
      to={isAvailableLesson ? `/event/lesson/${slug}`: '#'}
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
        className={classnames(`
          rounded
          border
        border-gray-500
          p-4
          mt-2
        `, {
          'bg-green-500' : isActiveLesson,
          'group-hover:border-green-500': isAvailableLesson,
          'group-hover:border-orange-500': !isAvailableLesson,
          }
        )}
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
              className={classnames(`
                text-sm
                font-medium
                flex
                item-center
                gap-2
              `, {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson
              }
            )}
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
            className={classnames(`
                text-xs
                rounded
                px-2
                py-[0.125rem]
                border
              border-green-300
                font-bold
                uppercase
              `, {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
                'text-green-500': !isAvailableLesson,
                'text-white': isAvailableLesson,
              }
            )}
          >
            {type === 'live' ? 'ao vivo' : 'aula prática'}
          </span>
        </header>
        <strong
          className={classnames(`
              mt-5
              block
            `, {
              'text-white': isActiveLesson,
              'text-gray-200': !isActiveLesson
            }
          )}
        >
          {title}
        </strong>
      </div>
    </Link>

  )
}