import { Header } from "../../components/Header"
import { Lesson } from "../../components/Lesson"
import { Player } from "../../components/Player"
import { Sidebar } from "../../components/Sidebar"

export const Event: React.FC = () => {
  return (
    <div 
      className="
        flex
        flex-col
        min-h-screen
      "
    >
      <Header />
      <main 
        className="
          flex
          flex-1  
        "
      >
        <Player />
        <Sidebar />
      </main>
      {/* <Lesson /> */}
    </div>
  )
}