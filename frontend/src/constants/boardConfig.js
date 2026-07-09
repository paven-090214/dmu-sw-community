export const boardConfig = {
    school: {
        type: "school",
        title: "학교 공지",
        description: "학교 공지사항 확인 게시판",
        canWrite: false,
    },
    department: {
        type: "department",
        title: "학과 공지",
        description: "학과 공지사항 확인 게시판",
        canWrite: false,
    },
    talk: {
        type: "talk",
        title: "잡담",
        description: "잡담 게시판",
        canWrite: true,
    },
    question: {
        type: "question",
        title: "QnA",
        description: "QnA 게시판",
        canWrite: true,
    }
}