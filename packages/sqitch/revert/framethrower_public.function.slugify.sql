-- Revert flipr:framethrower_public.function.slugify from pg

begin;

  drop function if exists framethrower_public.slugify(text);

commit;