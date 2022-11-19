-- Revert flipr:framethrower_public.function.profile_is_customer from pg

begin;

  drop function if exists framethrower_public.profile_has_customer_id(framethrower_public.profile);

commit;
