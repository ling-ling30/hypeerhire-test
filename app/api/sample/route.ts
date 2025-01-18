import { NextResponse } from 'next/server';
import photo from '@/public/employee-photo.png';
import nationalFlag from '@/public/national-flag.png';

export async function GET() {
  const data = {
    message: 'User Data',
    items: [
      {
        id: 1,
        name: 'Abhishek Gupta A',
        image: photo,
        nationality: nationalFlag,
        experience: 2,
        description: [
          '마케팅 콘텐츠 제작',
          '인스타그램 관리',
          '트위터 관리',
          '블로그 글 작성',
        ],
      },
      {
        id: 2,
        name: 'Abhishek Gupta B',
        image: photo,
        nationality: nationalFlag,
        experience: 2,
        description: [
          '마케팅 콘텐츠 제작',
          '인스타그램 관리',
          '트위터 관리',
          '블로그 글 작성',
        ],
      },
      {
        id: 3,
        name: 'Abhishek Gupta C',
        image: photo,
        nationality: nationalFlag,
        experience: 2,
        description: [
          '마케팅 콘텐츠 제작',
          '인스타그램 관리',
          '트위터 관리',
          '블로그 글 작성',
        ],
      },
      {
        id: 4,
        name: 'Abhishek Gupta D',
        image: photo,
        nationality: nationalFlag,
        experience: 2,
        description: [
          '마케팅 콘텐츠 제작',
          '인스타그램 관리',
          '트위터 관리',
          '블로그 글 작성',
        ],
      },
    ],
  };

  return NextResponse.json(data);
}
