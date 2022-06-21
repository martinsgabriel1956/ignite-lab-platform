import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { client } from "./lib/apollo"

interface Lesson {
  id: string;
  title: string;
}

export const App = () => {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `;

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);
  
  return (
    <ul>
      {data?.lessons?.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  )
}
