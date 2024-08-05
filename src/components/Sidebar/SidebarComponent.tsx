// SidebarComponent.tsx
import React, { useState } from "react";
import FunctionButtons from "./FunctionButtons";
import MatrixDisplay from "./MatrixDisplay";

interface SidebarComponentProps {
  nodes: any[];
  edges: any[];
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({
  nodes,
  edges,
}) => {
  const [visibleSidebarContent, setVisibleSidebarContent] = useState<{
    [key: string]: boolean;
  }>({
    "arvore-funcionalidades": true,
    analise: true,
    matriz: true,
    classificacao: true,
    "tags-originais": true,
    "tags-reconciliadas": true,
    "erros-das-tags": true,
  });

  const toggleSidebarContent = (key: string) => {
    setVisibleSidebarContent((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleButtonClick = () => {
    console.log("Botão do Sidebar clicado!");
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);
  };

  const matrixData = [
    [1, 2, 3],
    [2, 2, 3],
    [1, 2, 1],
    [1, 2, 1],
    [1, 2, 2],
  ];

  return (
    <div className="r-sidebar-structure">
      <div
        className="sidebar-title"
        onClick={() => toggleSidebarContent("arvore-funcionalidades")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          e.key === "Enter" && toggleSidebarContent("arvore-funcionalidades")
        }
      >
        Árvore de Funcionalidades
      </div>
      <div
        className="sidebar-content"
        style={{
          display: visibleSidebarContent["arvore-funcionalidades"]
            ? "block"
            : "none",
        }}
      ></div>
      <div
        className="sidebar-title"
        onClick={() => toggleSidebarContent("analise")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleSidebarContent("analise")}
      >
        Análise
      </div>
      <div
        className="sidebar-content"
        style={{
          display: visibleSidebarContent["analise"] ? "block" : "none",
        }}
      >
        {/* Placeholder for Análise content */}
      </div>
      <div
        className="sidebar-title"
        onClick={() => toggleSidebarContent("matriz")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleSidebarContent("matriz")}
      >
        Matriz
      </div>
      <div
        className="sidebar-content"
        style={{
          display: visibleSidebarContent["matriz"] ? "block" : "none",
        }}
      >
        <MatrixDisplay matrix={matrixData} />
      </div>
      <div
        className="sidebar-title"
        onClick={() => toggleSidebarContent("classificacao")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          e.key === "Enter" && toggleSidebarContent("classificacao")
        }
      >
        Classificação
      </div>
      <div
        className="sidebar-content"
        style={{
          display: visibleSidebarContent["classificacao"] ? "block" : "none",
        }}
      >
        {/* Placeholder for Classificação content */}
      </div>
      <button onClick={handleButtonClick}>Clique aqui</button>
    </div>
  );
};

export default SidebarComponent;
