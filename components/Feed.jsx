'use client';

import { useEffect, useState } from "react"
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (  // VERY IMPORTANT - DO NOT NOT NOT USE '{}' INSTEAD USE USE USE '()'
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
        ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, SetSearchText] = useState('')
  const [posts, setPosts] = useState([])
  
  const handleSearchChange = (e) => {
    
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()

      setPosts(data)
    }

    fetchPosts();
  },[])
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>  

      <PromptCardList
        data={[posts]}
        handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed