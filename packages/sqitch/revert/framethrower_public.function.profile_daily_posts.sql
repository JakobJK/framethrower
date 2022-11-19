-- Revert flipr:framethrower_public.function.profile_daily_posts from pg

begin;

  drop function if exists framethrower_public.profile_daily_posts(framethrower_public.profile);

commit;
