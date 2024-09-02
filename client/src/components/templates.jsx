import '../styles/templates.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Templates({templates}){

    const templateList =  templates.map((temp) => 
        <li key={temp.key}>
            <CopyToClipboard text={temp.template}>
                <button>{temp.title}</button>
            </CopyToClipboard>
        </li>
        )

    return(
        <div>
            <ul>{templateList}</ul>
        </div>
    )
}