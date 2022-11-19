-- Deploy flipr:framethrower_public.type.instructor_status to pg

begin;
  create type framethrower_public.instructor_status as enum ('not_instructor','unpublished','inactive','active');
commit;
