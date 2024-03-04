import React from "react";

const LinuxPage = ({ linuxArticles }) => {
    const linuxArticles = [
        {
          id: 1,
          date: "04/03/2024",
          title: "Linux article",
          category: "Operating systems",
          imageUrl: "https://pakhotin.org/wp-content/uploads/2023/07/53113-106400-Linux-xl-1024x576.jpg",
          content: "This is a paragraph for the linux article",
          linkUrl: "https://www.linux.org/",
          linkName: "Linux"
        }
    ];

    return (
        <div>
            <h1>Linux related articles</h1>
            {linuxArticles.map(article => (
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

export default LinuxPage;