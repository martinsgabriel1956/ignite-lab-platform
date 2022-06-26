import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/UI/Logo";
import { useCreateSubscriberMutation } from "../../graphql/generated";

export const Subscribe: React.FC = () => {
  const navigate = useNavigate();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  const [createSubscriber, {
    loading
  }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;

    
    await createSubscriber({
      variables: {
        name: name!,
        email: email!
      }
    })

    navigate('/event');
  }

  return (
    <div 
      className="
        min-h-screen
        bg-blur
        bg-cover
        bg-no-repeat
        flex
        flex-col
        items-center
      "
    >
      <div
        className="
          max-w-[1100px]
          w-full
          flex
          items-center
          justify-between
          mt-20
          mx-auto
        "
      >
        <div 
          className="
            max-w-[640px]
          "
        >
          <Logo />

          <h1
            className="
              mt-8
              text-[2.5rem]
              leading-tight
            "
          >
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p
            className="
            mt-4
            text-gray-200
            leading-relaxed
            "
          >
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div 
          className="
            p-8
            bg-gray-700
            border
            border-gray-500
            rounded
          "
        >
          <strong
            className="
              text-2xl
              mb-6
              block
            "
          >
            Inscreva-se gratuitamente
          </strong>

          <form 
            className="
              flex
              flex-col
              gap-2
              w-full
            "
            action=""
            onSubmit={handleSubscribe}
          >
            <input 
              type="text" 
              placeholder="Seu nome completo" 
              className="
                bg-gray-900
                rounded
                px-5
                h-14
              " 
              ref={nameInputRef}
            />
            <input 
              type="email" 
              placeholder="Digite seu email" 
              className="
                bg-gray-900
                rounded
                px-5
                h-14
              " 
              ref={emailInputRef}
            />

            <button 
              type="submit"
              className="
                mt-4
                bg-green-500
                uppercase
                py-4
                rounded
                font-bold
                text-sm
                hover:bg-green-700
                transition-colors
                disabled:opacity-50
              "
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img 
        className="mt-10"
        src="/src/assets/code-mockup.png" 
        alt="" 
      />
    </div>
  )
}