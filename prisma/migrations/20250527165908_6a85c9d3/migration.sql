-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "consentAutomated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "consentMarketing" BOOLEAN NOT NULL DEFAULT false;

