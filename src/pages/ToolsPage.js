import React from "react";
import '../ToolsPage.css';


const ToolsPage = () => {
    const toolsContent = [
        {
            id: 1,
            name: "exiftool",
            description: "Display and edit file metadata",
            toolUrl: "https://exiftool.org/",
            toolUrlName: "exiftool.org"
        }
    ];

    return (
        <div>
            <h1 className="tools-heading"><i>Here's a list of free tools and programs:</i></h1>
            <table className="tools-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {toolsContent.map(tools => (
                        <tr key={tools.id}>
                            <td>{tools.name}</td>
                            <td>{tools.description}</td>
                            <td><a href={tools.toolUrl}>{tools.toolUrlName}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToolsPage;