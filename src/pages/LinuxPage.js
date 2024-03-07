import React from "react";
import '../ArticleStyle.css';

const LinuxPage = ({ linuxArticles }) => {
    return (
        <div>
            <h1 className="article-heading">Linux related articles</h1>
            {linuxArticles.map(article => (
                <div key={article.id} className="article-div">
                    <table className="article-table">
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
                            <td><a href={article.linkUrl} className="table-link">{article.linkName}</a></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default LinuxPage;