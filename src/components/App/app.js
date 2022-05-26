import React from "react";
import AppHeader from "../AppHeader";
import "./app.css";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddFrom from "../PostAddForm/postAddFrom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "Going to learn React JS",important: false,id: "1",like: false, },
        { label: "That is so good", important: true, id: "2", like: false },
        { label: "I need a break...", important: false, id: "3", like: false },
      ],
      term: '',
      filter: 'all',
    };
    this.onDeleted = this.onDeleted.bind(this);
    this.onAddPost = this.onAddPost.bind(this);
    this.maxId = 3;
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
    this.onUpdatefilter = this.onUpdatefilter.bind(this);
  }

  
  onDeleted(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((h) => h.id === id);
      
      const newdata = [...data.slice(0, index), ...data.slice(index + 1)];
      
      return {
        data: newdata,
      };
    });
  }
  
  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      let oldItem = data[index]
      const important = oldItem.important
      delete oldItem.important

      const newItems = {...oldItem, important: !important}

      const newdata = [...data.slice(0, index), newItems, ...data.slice(index + 1)];

      return {
        data: newdata
      }

    })
  }

  onToggleLike(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      let oldItem = data[index]
      const like = oldItem.like
      delete oldItem.like

      const newItems = {...oldItem, like: !like}

      const newdata = [...data.slice(0, index), newItems, ...data.slice(index + 1)];

      return {
        data: newdata
      }

    })
  }

  onAddPost(body) {
    if(body){
      const newItem = {
        label: body,
        important: false,
        id: this.maxId++,
      };
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
  
        return {
          data: newArr,
        };
      });
    }
  }


  filterPosts(items, filter){
    if(filter === 'like'){
      return this.state.data.filter(item => item.like);
    }else{
      return items
    }
  }

  searchPost(items, term){
    if(term.length === 0){
      return items
    }

     return items.filter(item => {
      return item.label.indexOf(term) > -1
    })
   
  }

  onUpdatefilter(filter){
    this.setState({filter})
  }

  onUpdateSearch(term){
    this.setState({term})
  }


  render() {
    const { data, term, filter } = this.state;
    const posts = data.length
    const like = data.filter(item => item.like).length

    const visiblePost = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader posts={posts} like={like}/>
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter onUpdatefilter={this.onUpdatefilter} filter={filter}/>
        </div>
        <PostList
          posts={visiblePost}
          onDelete={this.onDeleted}
          onImportant={this.onToggleImportant}
          onLiked={this.onToggleLike}
        />
        <PostAddFrom postsItem={this.onAddPost} />
      </div>
    );
  }
}
