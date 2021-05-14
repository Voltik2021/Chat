import React, {PureComponent} from 'react';
import ListChat from './ListChat';
import MessChat from './Messages';

class Chat extends PureComponent {
    state = {
        arrChat: [],
        arrMess: [],
        chatID: '',       
    }

    componentDidMount() {
        this.linkData().then((data) => {this.setState({arrChat:data}); console.log(this.state.arrChat)})        
    }

    componentDidUpdate(bilprops, bilstate) {
        if (bilstate.chatID !== this.state.chatID) {
            this.linkData().then((data) => {
                console.log(data)
                this.setState({arrMess:data})
            })
        }
    }
    
    linkData = () => {
        let url = '';        
        if (this.state.chatID === '') {             
            url = `https://60895abe8c8043001757e9c6.mockapi.io/chats`;
        } else {            
            url = `https://60895abe8c8043001757e9c6.mockapi.io/chats/${this.state.chatID}/messages`
            console.log(url)
        }
        return fetch(url)
                    .then((response) => response.json())
    }
    onClick = (id) => {
        this.setState({chatID:id})
    }

    render() {
        return (
            <div className = "MainDiv">
                <div className = "listDiv"> 
                    {this.state.arrChat.map((item) => <ListChat key = {item.id} {...item} onClick = {this.onClick}/>)} 
                </div>
                <div className = "mass">
                    <MessChat arrMess = {this.state.arrMess}/>
                </div>                
            </div>
        )
    }              
}
export default Chat