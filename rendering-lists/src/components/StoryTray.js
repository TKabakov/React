export default function StoryTray({ stories }) {
 const newStory = [...stories,{id:"create",
   label:"Create story"}]
  ;

  return (
    <ul>
      {newStory.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

