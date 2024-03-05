import React from "react";
import '../ArticleStyle.css';

const CodingPage = ({ codingArticles }) => {
    return (
        <div>
            <h1>Coding related articles</h1>
            {codingArticles.map(article => (
                <div key={article.id}>
                    <table>
                        <tr>
                            <th>{article.date}</th>
                            <th>{article.title}</th>
                            <th>{article.category}</th>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><img src={article.imageUrl} alt={article.imageName} className="article-image"/></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>{article.content}</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><a href={article.linkUrl}>{article.linkName}</a></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default CodingPage;