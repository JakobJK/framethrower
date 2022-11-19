-- Deploy flipr:framethrower_public.table.company_pro_agreement to pg

begin;

  create table framethrower_private.company_pro_agreement(
    id uuid primary key not null default uuid_generate_v4(),
    company_id uuid unique not null references framethrower_public.company(id) on delete cascade,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    students_amount integer not null default 0,
    monthly_feedbacks_per_student integer not null default 1,
    per_student_fee integer not null
  );
commit;