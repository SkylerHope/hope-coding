import React from "react";

const CodingPage = ({ codingArticles }) => {
    const codingArticles = [
        {
          id: 1,
          date: "04/03/2024",
          title: "Coding article",
          category: "Programming",
          imageUrl: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
          content: "This is a paragraph for the coding article",
          linkUrl: "https://www.freepik.com/",
          linkName: "Freepik"
        }
    ];

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
                            <td><img src={article.imageUrl}/></td>
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