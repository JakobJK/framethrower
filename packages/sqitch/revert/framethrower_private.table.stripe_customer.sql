-- Revert flipr:framethrower_private.table.stripe_customer from pg


begin;

  drop table if exists framethrower_private.stripe_customer;

commit;
