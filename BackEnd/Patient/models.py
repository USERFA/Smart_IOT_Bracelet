from django.db import models

# Create your models here.
class Patients(models.Model):
    PatientId = models.AutoField(primary_key = True)
    PatientName = models.CharField(max_length = 100)
    PatientAge = models.CharField(max_length = 100)
    PatientAdress = models.CharField(max_length = 100)
    PatientCin = models.CharField(max_length = 100)
    ChestPainType = models.CharField(max_length = 100)
    Cholesterol = models.IntegerField()
    FastingBS = models.IntegerField()
    RestingECG = models.CharField(max_length = 100)
    ExerciseAngina = models.CharField(max_length = 100)
    oldpeak = models.CharField(max_length = 100)
    ST_Slope = models.CharField(max_length = 100)
    idMédecin = models.CharField(max_length = 100)


class Médecins(models.Model):
    MédecinId = models.AutoField(primary_key = True)
    MédecinName = models.CharField(max_length = 100)
    MédecinAge = models.CharField(max_length = 100)
    MédecinCin = models.CharField(max_length = 100)
    Hospital = models.CharField(max_length = 100)


class Tuteurs(models.Model):
    TuteurId = models.AutoField(primary_key = True)
    TuteurName = models.CharField(max_length = 100)
    TuteurAge = models.CharField(max_length = 100)
    TuteurCin = models.CharField(max_length = 100)
    TuteurAdress = models.CharField(max_length = 100)
    TuteurNum = models.CharField(max_length = 100)
    idPatient = models.CharField(max_length = 100)


class Messages(models.Model):
    Message = models.CharField(max_length = 1000)
    idDestinataire = models.CharField(max_length = 100)
    idEmetteur = models.CharField(max_length = 100)

