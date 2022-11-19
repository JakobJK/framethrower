-- Deploy flipr:framethrower_public.type.jwt_token to pg

begin;

  create type framethrower_public.jwt_token as (
    role framethrower_public.user_role,
    id uuid,
    instructor framethrower_public.instructor_status,
    premium text
  );

commit;
