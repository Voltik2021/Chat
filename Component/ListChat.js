import React, {PureComponent} from 'react';

class ListChat extends PureComponent {
    
    render() {
        console.log(this.props)
        return (
            <>             
                <div className = 'plitkaChat' onClick = {() => this.props.onClick(this.props.id)}>
                    <div className = 'ava'>
                        <img src = {this.props.avatar}/>
                    </div>
                    <div className = 'nameInfa'>
                        <p className = 'name'>{this.props.title}</p>
                        <p className = 'infa'></p>
                    </div>
                </div>
            </>
        )
    }

                
}
export default ListChat