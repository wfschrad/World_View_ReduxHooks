import React, { Component, useEffect } from 'react'
import { newsUrlTopCountry, apiKEY } from '../config';
import { useSelector, useDispatch } from 'react-redux';


export default function ApolloHome() {
    const currCountry = useSelector((state) => state.currCountry);

    const fetchArticles = () => {
        (async () => {
            debugger;
            const res = await fetch(`${newsUrlTopCountry}${currCountry}&apiKey=${apiKEY}`);
            const { articles } = await res.json();
            debugger;
            console.log('articles', articles)
            console.log('curr', currCountry)
        })()
    }

    useEffect(fetchArticles, []);
    return (
        <div>
            Hello, Apollo
        </div>
    )
}

// export class ApolloHome extends Component {
//     constructor(props) {
//         super(props);
//         const currCountry = useSelector((state) => state.currCountry);

//         this.state = {
//             currCountry
//         }
//     }

//     async componentDidMount() {
//         const res = await fetch(`${newsUrlTopCountry}ca&apiKey=${apiKEY}`);
//         const { articles } = await res.json();
//         console.log('articles', articles)
//         console.log('curr', this.currCountry)
//     }

//     render() {
//         return (
//             <div>
//                 Hello, Apollo!
//             </div>
//         )
//     }
// }

// export default ApolloHome
