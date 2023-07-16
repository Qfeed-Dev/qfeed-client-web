import Link from 'next/link';

const KaKaoLogin = () => {
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
    >
      카카오 로그인
    </Link>
  );
};

export default KaKaoLogin;
