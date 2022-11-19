-- Deploy flipr:framethrower_hidden.table.issued_tokens to pg

begin;
  create table framethrower_hidden.issued_tokens(
    id uuid primary key not null default uuid_generate_v4(),
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    token text not null,
    token_type framethrower_hidden.token_type not null,
    created_at timestamptz not null default now(),
    expire_at timestamptz not null
  );
commit;
